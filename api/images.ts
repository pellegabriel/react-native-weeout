import { ImagePickerResult } from "expo-image-picker"
import { supabase } from "../supabase"

export const uploadImage = async (eventId, file: ImagePickerResult) => {
    const { data: { user: { id } } } = await supabase.auth.getUser()    

    const uri = file.assets[0].uri
    const ext = uri.substring(uri.lastIndexOf('.') + 1)
    const formData = new FormData()

    formData.append("files", {
        uri,
        name: `image-${id}-${eventId}`,
        type: `image/${ext}`
    })

    const { data, error } = await supabase.storage.from('images').upload(
        `image-${id}-${eventId}`,
        formData
    )

    if (error) {
        console.log('upload error', error)
    } else {
        console.log('success upload', data)
        const { data: { publicUrl } } = await supabase.storage.from('images').getPublicUrl(`image-${id}-${eventId}`)
        return publicUrl
    }
}

export const deleteImages = async (fileNamesToDelete: string[]) => {
    const { data, error } = await supabase.storage.from('images').remove(fileNamesToDelete)

    if (error) {
        console.log('deleted error', data)
    } else {
        console.log('deleted successfully', data)
    }
}