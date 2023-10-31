I built the pp from scratch, without using any starter templates. I installed React Router and added a few routes, as well as i18n-next to support multiple languages. I used a few translatable keys and made sure the layout has RTL support.

I used RTKQ to create an API slice to fetch the reservations list directly from the included Github gist. Finally, I used Tailwind CSS for all the styles.

I noticed that the filter reservations scenario and the non-functional requirements section seemed to overlap. I interpreted this to mean that I should implement a filter box that filters all the columns showing in the table, using only the columns that were defined in the scenario. I believe this should be of value to the user.

### To Install
```git clone https://github.com/the-ashraf/react-demo.git```

```npm install```

```npm run dev```