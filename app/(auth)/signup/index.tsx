import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignupForm from '@/components/form/signup-form'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function index() {
  return (
    <SafeAreaView>
      <SignupForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})