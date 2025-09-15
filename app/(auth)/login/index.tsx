import {  StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import LoginForm from '@/components/form/login-form'

export default function index() {
  return (
    <SafeAreaView>
      <LoginForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})