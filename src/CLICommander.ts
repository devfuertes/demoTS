import { Command } from 'commander';
const program = new Command();

program
  .name('CLI')
  .description('CLI Sample')
  .command('all')
  .command('find <key>')  
  .command('add<note>')  
  .command('update<note>');


  
program.parse();


