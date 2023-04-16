import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useRegisterTournament = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [success,setSuccess]=useState(null)
  const { dispatch } = useAuthContext()

  const registerTournament = async (data) => {
    setIsLoading(true)
    setError(null)

    const tournament={
        name:data.get('name'),
        description:data.get('description'),
        sport:data.get('sport'),
        poster:data.get('poster'),
        district:data.get('district'),
        state:data.get('state'),
        schedule:{
            start_date:data.get('start_date'),
            end_date:data.get('end_date'),
            duration:data.get('duration')
        },
        organizer:{
            name:data.get('organiser_name'),
            email:data.get('email'),
            phone:data.get('phone'),
            contact_person:data.get('contact_person'),
            social_media:{
                facebook:data.get('facebook'),
                twitter:data.get('twitter'),
                instagram:data.get('instagram')
            }
        },
        participants:{
            total:Math.floor(Math.random() * 10),
        },
        rules:data.get('rules').split('\n'),
        eligibility_criteria:data.get('eligibility_criteria'),
        participation_fee:data.get('participation_fee'),
        prize_pool:{
            first_place:data.get('first_place'),
            second_place:data.get('second_place'),
            third_place:data.get('third_place'),
        },
        audience:{
            no_of_audience:Math.floor(Math.random() * 100)
        }


    }
    // console.log(tournament)

    const response = await fetch('/api/tournaments', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(tournament)
    })
    const json = await response.json()

    console.log(json)

    if (!response.ok) {
      
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // update loading state
      setIsLoading(false)
      setSuccess(json.msg)  
    }
  }

  return { registerTournament, isLoading, error,success }
}