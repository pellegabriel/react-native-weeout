import { supabase } from "../supabase";

export const uploadAudio = async (eventId, file) => {
    const { data: { user: { id } } } = await supabase.auth.getUser()

    // get the extension
    const uri = file.getURI();
    const ext = uri.substring(uri.lastIndexOf('.') + 1)
    const formData = new FormData()
    
    const blob = new Blob([uri], { type: `audio/${ext}` });

    formData.append("files", blob, `audio-${id}-${eventId}`);

    const { error } = await supabase.storage.from('audios').upload(
        `audio-${id}-${eventId}`,
        formData
    )

    if (error) {
        console.log('upload error', error)
    } else {
        const { data: { publicUrl } } = await supabase.storage.from('audios').getPublicUrl(`audio-${id}-${eventId}`)
        
        return publicUrl
    }
}

export const deleteAudio = async (fileNamesToDelete: string[]) => {
    const { data, error } = await supabase.storage.from('audios').remove(fileNamesToDelete)

    if (error) {
        console.log('deleted error', data)
    }

    
}