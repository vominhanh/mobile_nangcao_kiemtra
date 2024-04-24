import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import UserItem from "../components/UserItem";
import CourseItem from "../components/CourseItem";

const NetworkScreen = () => {
  const [users, setUsers] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    fetch("https://6626ff66b625bf088c0715ac.mockapi.io/user", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    fetch("https://6626ff66b625bf088c0715ac.mockapi.io/course", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((courses) => {
        setCoursesData(courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View>
      <View>
        <Text>From your university</Text>
        <FlatList
          data={users}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <UserItem
              image={item.item.avatar}
              name={item.item.name}
              job={item.item.job}
            />
          )}
        />
      </View>
      <View>
        <Text>Recommeded groups for you</Text>
        <FlatList
          data={coursesData}
          numColumns={2}
          renderItem={(item) => (
            <CourseItem
              image={item.item.image}
              name={item.item.name}
              member={item.item.member}
            />
          )}
        />
      </View>
    </View>
  );
};

export default NetworkScreen;
