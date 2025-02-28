import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { styles } from "./styles";
import { Feather, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "../../theme";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Função para carregar as notas do AsyncStorage
  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem("notes");
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.error("Erro ao carregar notas", error);
    }
  };

  // Função para salvar as notas no AsyncStorage
  const saveNotes = async (notes) => {
    try {
      await AsyncStorage.setItem("notes", JSON.stringify(notes));
    } catch (error) {
      console.error("Erro ao salvar notas", error);
    }
  };

  // Chama a função para carregar as notas assim que o componente for montado
  useEffect(() => {
    loadNotes();
  }, []);

  const handleSave = () => {
    const timestamp = new Date().toLocaleString();
    let updatedNotes;
    if (editingIndex !== null) {
      updatedNotes = notes.map((note, index) =>
        index === editingIndex ? { title, body, timestamp } : note
      );
      setEditingIndex(null);
    } else {
      updatedNotes = [...notes, { title, body, timestamp }];
    }
    setNotes(updatedNotes);
    saveNotes(updatedNotes); // Salva as notas no AsyncStorage
    setTitle("");
    setBody("");
  };

  const handleEdit = (index) => {
    setTitle(notes[index].title);
    setBody(notes[index].body);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    saveNotes(updatedNotes); // Salva as notas no AsyncStorage
    setTitle("");
    setBody("");
    setEditingIndex(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { fontSize: 18, color: "#FFF" }]}
        placeholder="Title"
        placeholderTextColor="#FFF"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea, { fontSize: 18, marginTop: 50, color: "#FFF" }]}
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        placeholderTextColor="#FFF"
        multiline
      />
      <ScrollView style={styles.scrrolView}>
        <FlatList
          data={notes}
          contentContainerStyle={{ paddingBottom: 60, paddingTop: 60 }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.noteCard}>
              <Text style={styles.noteTitle}>{item.title}</Text>
              <Text>{item.body}</Text>
              <Text style={styles.timestamp}>Criado em: {item.timestamp}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(index)}>
                  <Feather name="edit" color="#FFF" size={18} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(index)}>
                  <MaterialCommunityIcons name="delete" color="#FFF" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>
          {editingIndex !== null ? (
            <MaterialCommunityIcons size={24} name="update" />
          ) : (
            <FontAwesome6 size={24} name="add" />
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
