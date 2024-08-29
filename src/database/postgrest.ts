// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'YOUR_SUPABASE_URL';
// const supabaseKey = 'YOUR_SUPABASE_KEY';

// export const supabase = createClient(supabaseUrl, supabaseKey);

// export async function saveScore(playerName: string, score: number) {
//   const { data, error } = await supabase
//     .from('scores')
//     .insert([{ player_name: playerName, score: score }]);

//   if (error) {
//     console.error('Error saving score:', error);
//   } else {
//     console.log('Score saved successfully:', data);
//   }
// }