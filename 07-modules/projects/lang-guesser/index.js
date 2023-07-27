import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];
const langCode = franc(input);

console.log(langCode);

if (langCode === 'und') {
  console.log('Error: Undetermined'.red);
} else {
  const language = langs.where('3', langCode);
  if (language) {
    console.log(language.name.green);
  } else {
    console.log(`Error: No language found for ${langCode}`.red);
  }
}
