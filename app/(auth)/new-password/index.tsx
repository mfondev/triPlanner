import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CreateNewPasswordForm from '@/components/form/new-password-form'

export default function index() {
  return (
    <SafeAreaView>
      <CreateNewPasswordForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})