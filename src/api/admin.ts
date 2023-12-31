
import { supabase } from "../../supabase/supabase.config";

import type { TablesInsert } from "@/types/supabase";



export const deletePost = async(id :string) => {
  const { error } = await supabase.from('post').delete().eq('id', `${id}`);
  if (error) {
    console.log(error)
  }
}

export const getPost = async () => {
  const { data, error } = await supabase.from('post').select(`*`).order('created_at', { ascending: false });
  if (error) {
    console.log(error)
  }
  return data;
}

export const postPost = async (newPost: TablesInsert<'post'> ) => {
  const { error } = await supabase.from('post').insert(newPost);
  if (error) {
    console.log(error)
    return error
  }
};

export const uploadImg = async ({ imgName, imgFile }: { imgName: string; imgFile: File }) => {
  const { error } = await supabase.storage.from('post_images').upload(`img/${imgName}`, imgFile, {
    cacheControl: '3600',
    upsert: false,
  });
  if (error) {
    throw error;
  }
};

export const getPostImgUrl = (imgName: string) => {
  const { data } = supabase.storage.from('post_images').getPublicUrl(`img/${imgName}`);
  return data.publicUrl;
};