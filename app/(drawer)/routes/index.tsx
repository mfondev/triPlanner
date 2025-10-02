import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddButton from "@/components/ui/add-button";

export default function index() {
  return <AddButton subject="Plan Trip" path={"/routes/modal"} />;
}

const styles = StyleSheet.create({});
