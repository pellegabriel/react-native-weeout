import { supabase } from "../supabase";

export const uploadAudio = async (fileName, file) => {
    const { data, error } = await supabase.storage.from('audios').upload(`${fileName}`, file)

    if (error) {
        console.log('upload error', data)
    } else {
        console.log('success upload', data)
    }
}

export const deleteAudio = async (fileNamesToDelete: string[]) => {
    const { data, error } = await supabase.storage.from('audios').remove(fileNamesToDelete)

    if (error) {
        console.log('deleted error', data)
    } else {
        console.log('deleted successfully', data)
    }
}