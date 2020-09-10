# Cat Facts Redux Project

This is a demo react-native app which will search through public api rest [Cat-facts](https://alexwohlbruck.github.io/cat-facts/docs/)
sentences about cats, and save it in a personal list which could be modified (adding or deleting facts).

## Goals

1. ✅ **Sketch the plan**
2. ✅ **Create Tab Navigator: Search, Favourites, Add, Profile**
   1. **_Search Tab Component_**
      1. ✅ Create Redux Store to fetch all the data from the API at start:
         `{ facts: [... api response], user_data: { first: 'default', last: 'default ', favourites: [...], my_facts: [...] } }`
      2. ✅ Show all results on flat list in FactCard Component which have favourite icon (no functionality yet).
      3. ✅ Pressing the text navigate to fact details (stack navigator) with all the data.
      4. ✅ Add input (KeyboardAvoidingView) which filter results `*any form*`.
      5. Favourite functionality: Saves result on `user_data.favourites` array pressing the star.
   2. **_Favourite Tab Component_**
      1. Show favourites fact in FactCard, though can be removed unchecking the star icon.
      2. Keep the fact info pressing the text (stack navigator) like in _Search Tab Component_.
   3. **_Add Tab Component_**
      1. TopTabNavigator with add and my facts
      2. Add: Input for the fact and on submit save on facts and `my_facts`.
      3. My Facts: FlatList of your facts where you can delete it pressing the trash icon.
   4. **_Profile Tab Component_**
      1. Info (name, favourite facts counter and created facts counter)
