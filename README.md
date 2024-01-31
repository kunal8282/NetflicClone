# Netflix Clone with Recommended search system using ChatGPT

Not a responsive website so please using desktop
Tech Stack : ReactJS, Firebase, TailwindCSS, Vite, OpenAI API's 

# Build Till Now

- Build Authentication Page
- Build SignIn and SignUp Form Component
- Validate function for form
- Authenatication using Firebase 
- Add Protected Route to the component (Takeaway : Do not use Navigate hook in useEffect, for Protected Route)
- Add Loader for Protected Route on Navigation
- Fetch data from TMDB API and Store the general data to store
- Add Header to component and Dropdown menu Component and add signout logic
- Add Component where video trailer run in background and video title on top
- Add Carsouel list component and card component
- Add Normal Search Page to search movies on names
- Add GPTSearch Component which uses openai api to recommend movies 
- Build common form component for both GPTSearch and Normal Search Page
- Add lazy loading to GPT search component
- Add Spinner Loader Shimmer UI 




# Feature / Planning

- Login / Sign Up
    - Sign In / Sign Up Form 
    - redirect to Browse Page

- Browser Page (After Auth)
    - Header 
    - Main Movies (Routes : Home, TV Shows, My List)
        - Trailer in Background
        - Title & Description
        - MoviesSuggestion
            - MoviesList * N
    - WatchPage 

- NetflixGPT
    - Search Bar
    - Movies Suggestion


# Looked upto List
- Width issue with carousel component