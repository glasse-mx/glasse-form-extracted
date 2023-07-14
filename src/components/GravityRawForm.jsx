import { useState } from "react"
import { geGravityRaw } from "../utils/getGravityRaw"
import { GravityForm } from "./GravityForm"
import { LoadingForm } from "./LoadingForm"
import { EntryCompleted } from "./EntryCompleted"

export const GravityRawForm = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [isEntrySubmitted, setIsEntrySubmitted] = useState(false)
  const gravityForm = geGravityRaw(1, isLoading, setIsLoading)

  const { title, description, fields, button } = gravityForm

  return (
    <>
      {
        isLoading ? <LoadingForm /> :
          isEntrySubmitted
            ? <EntryCompleted />
            : <GravityForm
              id={1}
              fields={fields}
              button={button}
              loading={isLoading}
              setLoading={setIsLoading}
              submitted={isEntrySubmitted}
              sendSubmission={setIsEntrySubmitted}
            />

      }

    </>
  )
}
