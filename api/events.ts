import { useEffect, useState } from "react";
import { supabase } from "../supabase";

type TUseGetEvents = {
    data: any
    error: string
    loading: boolean
    refetchEvents: () => void

}

type TUseCreateEvents = {
    data: any
    createEvent: (eventData:any) => Promise<void>
    error: string
    loading: boolean
}
//no se como cambiar aca para el refetch
export const useGetEvents = (): TUseGetEvents => {
    const [data, setData] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
  
    const fetchEvents = async () => {
      try {
          setLoading(true)
          const { data } = await supabase.from("events").select();
          setData(data)
      } catch (err){
          setError(err)
      } finally {
          setLoading(false)
      }
    }

    const refetchEvents = async () => {
        try {
            const { data } = await supabase.from("events").select();
            setData(data)
        } catch (err){
            setError(err)
        }
      }

    useEffect(() => {
      fetchEvents()
    }, [])

    return { data, error, loading , refetchEvents }
}

export const useCreateEvent = (): TUseCreateEvents => {
    const [data, setData] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
  
    const createEvent = async (eventData) => {
        try {
            setLoading(true)
            const response = await supabase.from("events").insert([eventData]);
            console.log(response)
            setData(response.data);
        } catch (err){
            console.log({ err })
            setError(err)
        }   finally {
            setLoading(false)
        }
    }
  
    return { data, createEvent, error, loading }
}