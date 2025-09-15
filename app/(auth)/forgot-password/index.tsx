import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ForgotPasswordForm from '@/components/form/forgot-password-form'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function index() {
  return (
    <SafeAreaView>
    <ForgotPasswordForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})