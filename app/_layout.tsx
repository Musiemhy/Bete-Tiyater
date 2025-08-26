import { ThemeProvider } from "@/context/ThemeContext";
import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack> 
        <Stack.Screen 
          name="(tabs)"
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen 
          name="movies/[id]"
          options={
            {
              headerShown: false
            }
          }
        />
      </Stack>
    </ThemeProvider>
  )
}
