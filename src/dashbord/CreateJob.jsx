import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createJobs } from "../redux/action/jobAction";
import { setError, setJobCreated } from "../redux/sclice/JobSclice";
import CustomInput from "../component/Dropdowns";

const JobForm = () => {
  const dispatch = useDispatch();
  const { error, job } = useSelector((e) => e.Jobs);
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

  useEffect(() => {
    if (error) {
      ToastAndroid.show(error, ToastAndroid.SHORT);
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
      ToastAndroid.show(
        "Please fill in all fields and add at least one skill.",
        ToastAndroid.SHORT
      );
      return;
    }
    console.log({ ...formData, skills });

    // dispatch(createJobs({ ...formData, skills }));
    // setFormData({
    //   title: "",
    //   skills: [],
    //   jobType: "",
    //   category: "",
    //   graduation: "",
    //   openings: "",
    //   description: "",
    //   preferences: "",
    //   salary: "",
    //   location: "",
    // });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          value={formData.title}
          onChangeText={(text) => setFormData({ ...formData, title: text })}
          placeholder="Enter job title"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Skills:</Text>
        <View style={styles.skillInputContainer}>
          <TextInput
            style={[styles.input, styles.skillInput]}
            value={skillInput}
            onChangeText={setSkillInput}
            placeholder="Enter a skill"
          />
          <TouchableOpacity onPress={handleAddSkill} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.skillList}
        >
          {skills.map((skill, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleRemoveSkill(index)}
              style={styles.skillItem}
            >
              <Text style={styles.skillText}>{skill}</Text>
            </TouchableOpacity>
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

      <View style={styles.formGroup}>
        <Text style={styles.label}>Graduation:</Text>
        <TextInput
          style={styles.input}
          value={formData.graduation}
          onChangeText={(text) =>
            setFormData({ ...formData, graduation: text })
          }
          placeholder="Enter graduation requirements"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Openings:</Text>
        <TextInput
          style={styles.input}
          value={formData.openings}
          onChangeText={(text) => setFormData({ ...formData, openings: text })}
          placeholder="Enter number of openings"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          value={formData.description}
          onChangeText={(text) =>
            setFormData({ ...formData, description: text })
          }
          placeholder="Enter job description"
          multiline={true}
          numberOfLines={4}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Preferences:</Text>
        <TextInput
          style={styles.input}
          value={formData.preferences}
          onChangeText={(text) =>
            setFormData({ ...formData, preferences: text })
          }
          placeholder="Enter job preferences"
          multiline={true}
          numberOfLines={4}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Salary:</Text>
        <TextInput
          style={styles.input}
          value={formData.salary}
          onChangeText={(text) => setFormData({ ...formData, salary: text })}
          placeholder="Enter salary"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Location:</Text>
        <TextInput
          style={styles.input}
          value={formData.location}
          onChangeText={(text) => setFormData({ ...formData, location: text })}
          placeholder="Enter job location"
        />
      </View>

      <View style={styles.submitButtonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="#4080ED" />
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  skillInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  skillInput: {
    flex: 1,
  },
  addButton: {
    backgroundColor: "#4080ED",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    color: "white",
    fontSize: 20,
  },
  skillList: {
    marginTop: 5,
  },
  skillItem: {
    backgroundColor: "#4080ED",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  skillText: {
    color: "white",
  },
  submitButtonContainer: {
    marginTop: 20,
  },
};

export default JobForm;
