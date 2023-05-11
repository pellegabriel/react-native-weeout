import { useEffect, useState } from "react";
import { supabase } from "../supabase";

type TUseGetEvents = {
    data: any
    error: string
    loading: boolean
}

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
  
    useEffect(() => {
      fetchEvents()
    }, [])

    return { data, error, loading }
}