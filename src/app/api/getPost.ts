import { supabase } from "../../../supabase/supabase.config";

export const getPostPagination = async (pageParams: number, sortParams: string) => {
  const getSupabaseSorting = async(query: string) => {
    const startPostNumber = (pageParams - 1) * 8;
    const endPostNumber = pageParams * 8 - 1;
    if (query == "전체") {
      const { data } = await supabase.from('post').select('*').range(startPostNumber, endPostNumber);
      const { count } = await supabase.from('post').select(`id`, { count: 'exact', head: true })
      return {data, count}
    }
    else {
      const { data } = await supabase.from('post').select('*').eq('category', query).range(startPostNumber, endPostNumber);
      const { count } = await supabase.from('post').select(`id`, { count: 'exact', head: true }).eq('category', query)
      return {data, count}
    }
  }

  const {data, count} = await getSupabaseSorting(sortParams)
  return {data, totalPages: Math.ceil((Number(count) ?? 0) / 8) *10};  
};

export const getPostDetail = async (id: string) => {
  const { data, error } = await supabase.from('post').select("*").eq('id', id)
  if (error) {
    console.log(error)
    throw error
  }
  return data[0]
}
