import { supabase } from "../../../supabase/supabase.config";

export const getPostPagination = async (pageParams: number) => {
  const {count} = await supabase.from('post').select(`id`, {count: 'exact', head: true})
  const startPostNumber = (pageParams - 1) * 8;
  const endPostNumber = pageParams * 8 - 1;
  const {data, error} = await supabase.from('post').select('*').range(startPostNumber, endPostNumber);
  if (error) {
    throw error;
  }
  return {data, totalPages: Math.ceil((count ?? 0) / 8) *10};
};

export const getPostDetail = async (id: string) => {
  const { data, error } = await supabase.from('post').select("*").eq('id', id)
  if (error) {
    console.log(error)
    throw error
  }
  return data[0]
}
