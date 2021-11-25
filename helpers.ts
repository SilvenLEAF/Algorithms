import chalk from 'chalk';
export const log = (input: any, color: colorType = 'white') => {
  if(typeof input === 'object') console.log(chalk[color](JSON.stringify(input)));
  else console.log(chalk[color](input));
  
  // else if (['string', 'number', 'boolean', 'null', 'undefined'].includes(typeof input)) console.log(chalk[color](input));
}
type colorType = 'red' | 'green' | 'blue' | 'yellow' | 'white';
const arr: any[] = []
