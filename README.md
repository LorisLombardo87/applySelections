# applySelections
Automatically apply bookmark based on the user that open the sheet.
this extension can be useful when you want to automatically apply a particular bookmark when the user open the sheet.

after dropping the extension on the sheet you have to set up at least one rule in the propresties panel.
you can define up to 10 rules.

a rule is defined by:
- the users that triggers the rule. You can define a list of users separed by commas
- the bookmark you want to apply. the bookmark must be predefined in sense application.
- a check box that enable the rule.

the first rule can be defined to all users.

if more than a rule apply to the user, only the last rule enabled is applied.

the only element visible to the user is a button with a home icon, cliking on it apply the associated bookmark.

when deployed on a local installation of sense the user gets always the value Personal\Me.

it is a work in progress so i'm waiting for your comments, bug tracking or enhancement requests
