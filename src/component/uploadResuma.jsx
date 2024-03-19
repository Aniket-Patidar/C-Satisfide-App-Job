import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import DocumentPicker from '@react-native-document-picker/document-picker';
import axios from 'axios';

const UploadResumeComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelection = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(res);
    } catch (err) {
      console.log('Document picker error:', err);
    }
  };

  const handleUpload = async () => {
    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('document', {
          uri: selectedFile.uri,
          name: selectedFile.name,
          type: selectedFile.type,
        });

        const response = await axios.post('YOUR_REST_API_ENDPOINT', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            // Add any additional headers required by your API, e.g., authorization headers
          },
        });

        console.log('Upload successful:', response.data);
        Alert.alert('Upload successful');
      } else {
        Alert.alert('Please select a file');
      }
    } catch (err) {
      console.error('Upload error:', err);
      Alert.alert('Upload failed');
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleFileSelection}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#dadada', borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: '400', marginRight: 5 }}>Select Document</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleUpload}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#dadada', borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: '400', marginRight: 5 }}>Upload Document</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UploadResumeComponent;
