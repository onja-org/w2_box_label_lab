# CSS: Box Label Lab - (User Profile Card)🏷️

In this exercise, you'll design and implement a visually distinct "***User Profile Card***" component for a web application. This card will clearly demonstrate the CSS Box Model (**margin, border, padding, content**) by using different background colors and spacing for each conceptual layer. The goal is to create a well-structured and aesthetically pleasing component that could be reused across a website.

This task helps you visualize and understand how these layers are stacked and spaced in a real-world component.

Here a reference image of the box model (imagine this applied to the card's layers):

![alt text](/public/images.png)


## 🧩 Before You Begin: Fork & Clone
To get started, make sure you have your own copy of the project:

Fork the Repository: Go to the project's GitHub page.
<!-- end list -->

```
https://github.com/onja-org/w2_box_label_lab
```
Click the Fork button to create your own copy.
Clone Your Fork:
<!-- end list -->

```
git clone https://github.com/your-username/w2_box_label_lab.git
```

Navigate to the project
<!-- end list -->

```
cd w2_box_label/
```

Open the project in your code editor and follow the instructions in this lab.
<!-- end list -->

```
code .
```


## 💼 Your Task
Start completely from scratch. You'll write both the HTML and CSS yourself.

In your **index.html**, create the HTML structure for a "***User Profile Card***" component. This card should include:

- A main container `<div>` for the entire card.
- Inside the main container, consider how you'll represent the conceptual layers of the CSS Box Model:

  - **Margin**: The space around the entire card, separating it from other elements.
  - **Border**: A visual border around the card's content area.
  - **Padding**: Space between the border and the actual content within the card.
  - **Content**: The actual information (e.g., user's name, profile picture, a short bio).
    
Inside each of these conceptual layers (or the elements that represent them), you can include a subtle label (e.g., "***Card Margin Area", "Card Border", "Card Padding", "User Content***") to help visualize the layers initially, but prioritize the visual demonstration through CSS.

Include placeholder content for the user profile, such as:
- An `<img>` for a profile picture.
- An `<h2>` for the user's name.
- A `<p> `for a short bio or description.

In your **styles.css**:

Apply distinct background colors and spacing (margin, padding, border) to visually differentiate each layer of the Box Model within your User Profile Card.

- Ensure the card is visually centered on the page using flexbox on the `<body>` or another appropriate centering technique.
- Use `max-width` on the card to ensure it doesn't span the entire width of the page (e.g., 300px-400px is a good range for a profile card).
- Style the inner content (image, name, bio) appropriately for a user profile card, making it readable and aesthetically pleasing.

## ✅ Tips
- ***Use box-sizing***: border-box; to keep sizing manageable.
- Don't worry about getting it perfect on the first try - **use Dev Tools** to tweak and debug.
- This is about visual learning - so make your **User Profile Card** colorful, clear, and creative!

## 🎨 Bonus Part - Customize Your User Profile Card 
Now that you’ve built and labeled each layer of your User Profile Card, let’s make it yours!

## ✨ Challenge  
Inside your "Content" box (innermost layer), customize the profile information.

You can:

- Use a real profile picture (or a placeholder one).
- Add your own name or a fictional character's name.
- Write a short, creative bio.
- Experiment with different fonts, text colors, and shadows for the content.

## 🧠 Why?
Adding custom content helps you:

- Practice how padding affects spacing around real content within a component.
- Understand how borders behave when content grows or changes.
- Customize your project to feel more personal and engaging.
- Develop a sense of design by making deliberate choices about visual hierarchy.

Feel free to get creative! This isn’t just about memorizing CSS - it’s about making something functional and appealing!

## Running the Test (Steps)
Install dependencies by running:
<!-- end list -->

```
npm install
```

Run the test:
<!-- end list -->

```
npm test
```

This will execute the automated checks and give you feedback on whether your User Profile Card structure is correct.

**NB**: If you encounter errors, read the messages carefully - they’ll help you understand what to fix!

## Submission Instructions
When you're done:

Save all changes
Make sure all your changes are committed:
<!-- end list -->

```
git add .
git commit -m "Complete User Profile Card Lab"
```

Push your project to GitHub
<!-- end list -->

```
git push origin
```

## Git Quick Start (if needed):

```
git init
git add .
git commit -m "Complete advanced CSS layout for weather app"
git remote add origin https://github.com/your-username/w2_box_label_lab.git
git branch -M main
git push -u origin main
```