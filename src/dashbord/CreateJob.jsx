import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    skills: [],
    jobType: "",
    category: "",
    graduation: "",
    openings: "",
    description: "",
    preferences: "",
    salary: "",
    location: "",
  });

  const handleSkillChange = (newSkill) => {
    if (newSkill.trim() !== "" && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()],
      });
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(index, 1);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleSubmit = () => {
    // Perform form submission logic here
    // For demonstration, we'll just display the form data
    console.log(formData);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          value={formData.title}
          onChangeText={(text) => setFormData({ ...formData, title: text })}
          placeholder="Title"
        />
      </View>
      <View>
        <Text style={styles.label}>Skills:</Text>
        <TextInput
          style={styles.input}
          value={formData.skillInput}
          onChangeText={handleSkillChange}
          placeholder="Enter a skill and press Enter"
        />
        <ScrollView horizontal>
          {formData.skills.map((skill, index) => (
            <View
              key={index}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text>{skill}</Text>
              <Button title="Remove" onPress={() => handleRemoveSkill(index)} />
            </View>
          ))}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.label}>Job Type:</Text>
        <TextInput
          style={styles.input}
          value={formData.jobType}
          onChangeText={(text) => setFormData({ ...formData, jobType: text })}
          placeholder="Job Type"
        />
      </View>
      <View >
        <Text style={styles.label}>Category:</Text>
        <TextInput
          style={styles.input}
          value={formData.category}
          onChangeText={(text) => setFormData({ ...formData, category: text })}
          placeholder="Category"
        />
      </View>
      <View>
        <Text  style={styles.label}>Graduation:</Text>
        <TextInput
          style={styles.input}
          value={formData.graduation}
          onChangeText={(text) =>
            setFormData({ ...formData, graduation: text })
          }
          placeholder="Graduation"
        />
      </View>
      <View>
        <Text style={styles.label}>Openings:</Text>
        <TextInput
          style={styles.input}
          value={formData.openings}
          onChangeText={(text) => setFormData({ ...formData, openings: text })}
          placeholder="Openings"
        />
      </View>
      <View >
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          value={formData.description}
          onChangeText={(text) =>
            setFormData({ ...formData, description: text })
          }
          placeholder="Description"
        />
      </View>
      <View >
        <Text style={styles.label}>Preferences:</Text>
        <TextInput
          style={styles.input}
          value={formData.preferences}
          onChangeText={(text) =>
            setFormData({ ...formData, preferences: text })
          }
          placeholder="Preferences"
        />
      </View>
      <View>
        <Text style={styles.label}>Salary:</Text>
        <TextInput
          style={styles.input}
          value={formData.salary}
          onChangeText={(text) => setFormData({ ...formData, salary: text })}
          placeholder="Salary"
        />
      </View>
      <View >
        <Text style={styles.label}>Location:</Text>
        <TextInput
          style={styles.input}
          value={formData.location}
          onChangeText={(text) => setFormData({ ...formData, location: text })}
          placeholder="Location"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = {
  label: {
    fontSize: 15,
    marginBottom: 5,
    color: "#333",
    fontWeight:500,
  },

  input: {
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 20,
  },
};

export default JobForm;
