export const handleSignOut = async (auth) => {
  try {
    await auth.signOut()
  } catch (error) {
    console.error('Ошибка при выходе:', error)
  }
}