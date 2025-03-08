import { UserRegistrationContext } from "@/contexts/SignUpContext"
import { useContext } from "react"

export function useSignUpContext(){
    const context = useContext(UserRegistrationContext)
    return context
}