import { supabase } from "../supabase"

export const uploadImages = async (fileName, file) => {
    const { data, error } = await supabase.storage.from('images').upload(`${fileName}`, file)

    if (error) {
        console.log('upload error', data)
    } else {
        console.log('success upload', data)
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