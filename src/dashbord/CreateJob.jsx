import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createJobs } from "../redux/action/jobAction";
import { setError, setJobCreated } from "../redux/sclice/JobSclice";
import CustomInput from "../component/Dropdowns";
import { TouchableOpacity } from "react-native-gesture-handler";

const JobForm = () => {
  const dispatch = useDispatch();

  const { error, job } = useSelector((e) => e.Jobs);

  const [formData, setFormData] = useState({
    title: "",
    skills: [],
    jobType: "", //'In Office', 'Remote'
    category: "", //'Internship', 'job'
    graduation: "",
    openings: "",
    description: "",
    preferences: "",
    salary: "",
    location: "",
  });

  useEffect(() => {
    if (job) {
      alert("Job created successfully");
    }
  }, [job]);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(setError(null));
    }
  }, [error]);

  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);

  const handleAddSkill = () => {
    if (skillInput.trim() !== "") {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSubmit = () => {
    if (
      formData.title.trim() === "" ||
      formData.jobType.trim() === "" ||
      formData.category.trim() === "" ||
      formData.graduation.trim() === "" ||
      formData.openings.trim() === "" ||
      formData.description.trim() === "" ||
      formData.preferences.trim() === "" ||
      formData.salary.trim() === "" ||
      formData.location.trim() === "" ||
      skills.length === 0
    ) {
      alert("Please fill in all fields and add at least one skill.");
      return;
    }

    dispatch(createJobs({ ...formData, skills }));
    setFormData({
      title: "",
      skills: [],
      jobType: "", //'In Office', 'Remote'
      category: "", //'Internship', 'job'
      graduation: "",
      openings: "",
      description: "",
      preferences: "",
      salary: "",
      location: "",
    });
  };

  return (
    <ScrollView className="bg-white" contentContainerStyle={{ padding: 20 }}>
      <View>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          value={formData.title}
          onChangeText={(text) => setFormData({ ...formData, title: text })}
          placeholder="Title"
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Skills:</Text>
        <TextInput
          style={styles.input}
          value={skillInput}
          onChangeText={setSkillInput}
          placeholder="Enter a skill and press Enter"
          onSubmitEditing={handleAddSkill}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {skills.map((skill, index) => (
            <View
              key={index}
              className="flex flex-row gap-1 bg-[#dadada] text-sm px-1 py-1 mb-2 ml-1"
              style={styles.skillTab}
            >
              <Text>{skill}</Text>
              <TouchableOpacity onPress={() => handleRemoveSkill(index)}>
                <Text>x</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <CustomInput
        label="Job Type"
        options={["In Office", "Remote"]}
        onSelect={(option) => setFormData({ ...formData, jobType: option })}
      />

      <CustomInput
        label="Category"
        options={["Internship", "Job"]}
        onSelect={(option) => setFormData({ ...formData, category: option })}
      />
      <View>
        <Text style={styles.label}>Graduation:</Text>
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
      <View>
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
      <View>
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
      <View>
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
    fontWeight: 500,
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
