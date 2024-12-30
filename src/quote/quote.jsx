import styles from './quote.module.css'
import Card from './card'


function Quote(){
    const data = [
        { para: "The only way to do great work is to love what you do.", name: "Steve Jobs" },
        { para: "Life is what happens when you're busy making other plans.", name: "John Lennon" },
        { para: "Success is not final; failure is not fatal: It is the courage to continue that counts.", name: "Winston Churchill" },
        { para: "You miss 100% of the shots you don’t take.", name: "Wayne Gretzky" },
        { para: "Whether you think you can or you think you can’t, you’re right.", name: "Henry Ford" },
        { para: "The best way to predict the future is to invent it.", name: "Alan Kay" },
        { para: "It does not matter how slowly you go as long as you do not stop.", name: "Confucius" },
        { para: "Act as if what you do makes a difference. It does.", name: "William James" },
        { para: "Believe you can and you're halfway there.", name: "Theodore Roosevelt" },
        { para: "Be the change that you wish to see in the world.", name: "Mahatma Gandhi" },
        { para: "Do not wait for leaders; do it alone, person to person.", name: "Mother Teresa" },
        { para: "Happiness is not something ready-made. It comes from your own actions.", name: "Dalai Lama" },
        { para: "Don’t cry because it’s over, smile because it happened.", name: "Dr. Seuss" },
        { para: "You only live once, but if you do it right, once is enough.", name: "Mae West" },
        { para: "Life is short, and it is up to you to make it sweet.", name: "Sarah Louise Delany" },
        { para: "Be yourself; everyone else is already taken.", name: "Oscar Wilde" },
        { para: "There is no elevator to success. You have to take the stairs.", name: "Zig Ziglar" },
        { para: "The harder you work for something, the greater you’ll feel when you achieve it.", name: "Anonymous" },
        { para: "The secret of getting ahead is getting started.", name: "Mark Twain" },
        { para: "Everything you can imagine is real.", name: "Pablo Picasso" },
        { para: "The way to get started is to quit talking and begin doing.", name: "Walt Disney" },
        { para: "What you get by achieving your goals is not as important as what you become by achieving your goals.", name: "Zig Ziglar" },
        { para: "Don’t watch the clock; do what it does. Keep going.", name: "Sam Levenson" },
        { para: "We may encounter many defeats but we must not be defeated.", name: "Maya Angelou" },
        { para: "You are never too old to set another goal or to dream a new dream.", name: "C.S. Lewis" },
        { para: "When you have a dream, you’ve got to grab it and never let go.", name: "Carol Burnett" },
        { para: "The man who has confidence in himself gains the confidence of others.", name: "Hasidic Proverb" },
        { para: "It is better to fail in originality than to succeed in imitation.", name: "Herman Melville" },
        { para: "Your limitation—it’s only your imagination.", name: "Anonymous" },
        { para: "Push yourself, because no one else is going to do it for you.", name: "Anonymous" },
        { para: "Great things never come from comfort zones.", name: "Anonymous" },
        { para: "Dream it. Wish it. Do it.", name: "Anonymous" },
        { para: "Success doesn’t just find you. You have to go out and get it.", name: "Anonymous" },
        { para: "The harder you work, the luckier you get.", name: "Gary Player" },
        { para: "Keep your face always toward the sunshine—and shadows will fall behind you.", name: "Walt Whitman" },
        { para: "Opportunities don’t happen. You create them.", name: "Chris Grosser" },
        { para: "All our dreams can come true, if we have the courage to pursue them.", name: "Walt Disney" },
        { para: "Hardships often prepare ordinary people for an extraordinary destiny.", name: "C.S. Lewis" },
        { para: "Don’t stop when you’re tired. Stop when you’re done.", name: "Anonymous" },
        { para: "Work hard in silence, let your success be your noise.", name: "Frank Ocean" },
        { para: "If you want to achieve greatness stop asking for permission.", name: "Anonymous" },
        { para: "The only limit to our realization of tomorrow is our doubts of today.", name: "Franklin D. Roosevelt" },
        { para: "Everything you’ve ever wanted is on the other side of fear.", name: "George Addair" },
        { para: "Success is liking yourself, liking what you do, and liking how you do it.", name: "Maya Angelou" },
        { para: "Failure is the condiment that gives success its flavor.", name: "Truman Capote" },
        { para: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", name: "Ralph Waldo Emerson" },
        { para: "The best time to plant a tree was 20 years ago. The second best time is now.", name: "Chinese Proverb" },
        { para: "If you are not willing to risk the usual, you will have to settle for the ordinary.", name: "Jim Rohn" },
        { para: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", name: "Roy T. Bennett" },
    ];
    
    return (
        <div>
            <div className={styles.cardDiv}>
                     {data.map((item , idx) => {
                        return(
                            <Card key={idx} para={item.para} name={item.name} />
                        )
                     })}
                </div>
        </div>
    )
}
export default Quote