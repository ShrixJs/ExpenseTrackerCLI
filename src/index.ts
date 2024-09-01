import { program } from 'commander';


// #### create expense category

program
  .command('create <category>')
  .description('Creates a category for expenses')
  .action((category) => {
    console.log(category);
  });

// #### delete expense category

program
  .command('delete <category>')
  .description('Deletes an expense category')
  .action((category) => {
    console.log(`${category} has been deleted`);
  })

program.parse(process.argv);