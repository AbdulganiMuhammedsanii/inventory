'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { firestore } from "@/firebase";  // Adjust the path according to your project structure
import { Box, Typography, Modal, Stack, TextField, Button, Paper } from '@mui/material';
import { collection, deleteDoc, getDocs, query, doc, getDoc, setDoc } from "firebase/firestore";

export default function Home() {
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'));
    const docs = await getDocs(snapshot);
    const inventoryList = [];
    docs.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data()
      });
    });
    setInventory(inventoryList);
    console.log(inventoryList);
  }

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1 });
    } else {
      await setDoc(docRef, { quantity: 1 });
    }

    await updateInventory();
  }

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity === 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { quantity: quantity - 1 });
      }
    }
    await updateInventory();
  }

  useEffect(() => {
    updateInventory();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      sx={{ backgroundColor: '#f5f5f5', padding: 4 }}
    >
      <Modal open={open} onClose={handleClose}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{ transform: "translate(-50%, -50%)" }}
          width={400}
          bgcolor="white"
          border="2px solid #000"
          boxShadow={24}
          p={4}
          display="flex"
          flexDirection="column"
          gap={3}
          borderRadius={2}
        >
          <Typography variant="h5">Add Item</Typography>
          <Stack width="100%" direction="row" spacing={2}>
            <TextField
              variant='outlined'
              fullWidth
              value={itemName}
              onChange={(e) => {
                setItemName(e.target.value)
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                addItem(itemName);
                setItemName('');
                handleClose();
              }}
              sx={{ borderRadius: 2 }}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: 2 }}>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ borderRadius: 2, backgroundColor: '#1976d2' }}
        >
          Add New Item
        </Button>
        <TextField
          variant="outlined"
          placeholder="Search Items"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ backgroundColor: 'white', borderRadius: 2 }}
        />
      </Stack>
      <Box
        border='1px solid #333'
        borderRadius={2}
        width="800px"
        overflow="hidden"
      >
        <Box
          width="100%"
          height="100px"
          bgcolor="#1976d2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: '8px 8px 0 0' }}
        >
          <Typography
            variant="h2"
            color="white"
          >
            Inventory Items
          </Typography>
        </Box>
        <Stack
          width='100%'
          height="300px"
          spacing={2}
          overflow='auto'
          sx={{ padding: 2, backgroundColor: '#fafafa' }}
        >
          {filteredInventory.map(({ name, quantity }) => (
            <Paper
              key={name}
              elevation={3}
              sx={{
                width: "100%",
                minHeight: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#ffffff",
                padding: 3,
                borderRadius: 2
              }}
            >
              <Typography variant="h4" color='#333' textAlign="center">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Typography>
              <Typography variant="h4" color='#333' textAlign="center">
                {quantity}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  onClick={() => addItem(name)}
                  sx={{ borderRadius: 2 }}
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  onClick={() => removeItem(name)}
                  sx={{ borderRadius: 2 }}
                >
                  Remove
                </Button>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}