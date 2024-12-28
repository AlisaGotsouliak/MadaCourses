//פונקציה המופעלת בטעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {

    const jsonData = {
        "courses": [
            {
                "id": 1,
                "course_name": "קורס נאמני עזרה ראשונה",
                "description": "הקורס עוסק בנושאי החייאה, שימוש במכשירי החייאה ודפיברילטור, טיפול בחנק ומצבי חירום רפואיים שכיחים. מתאים לגננות, סייעות ואנשים המעוניינים בידע בעזרה ראשונה.",
                "hours": 22,
                "img": "images/Course_1.png",
                "tag": "FirstAid",
                "date": "02.02.2025",
                "address": "ז'בוטנסקי 104, ראשון לציון"
            },
            {
                "id": 2,
                "course_name": "קורס עזרה ראשונה לבני נוער",
                "description": 'המשתתפים לומדים לזהות ולטפל במצבי חירום, תוך הכרה עם פעילות מד"א והאמבולנס. מתאים לתלמידי כיתות ו-ח.',
                "hours": 12,
                "img": "images/Course_2.png",
                "tag": "FirstAid",
                "date": "15.03.2025",
                "address": "הרוקמים 2, חולון"
            },
            {
                "id": 3,
                "course_name": "קורס מגישי עזרה ראשונה מתוקשב",
                "description": "הקורס כולל לימוד מתוקשב אינטראקטיבי ומעשי, המותאם לסטודנטים להוראה. מאפשר לימוד בקצב אישי עם תמיכה טכנית ומקצועית.",
                "hours": 44,
                "img": "images/Course_3.png",
                "tag": "FirstAid",
                "date": "24.03.2025",
                "address": "ז'בוטנסקי 104, ראשון לציון"
            },
            {
                "id": 4,
                "course_name": "קורס מניעה וטיפול באלרגיה",
                "description": "קורס המלמד כיצד לזהות ולטפל בתגובה אלרגית מסכנת חיים, כולל שימוש במזרק אפיפן וביצוע פעולות החייאה.",
                "hours": 3,
                "img": "images/Course_4.png",
                "tag": "Emergency",
                "date": "12.04.2025",
                "address": "יגאל אלון 60, תל אביב -יפו"
            },
            {
                "id": 5,
                "course_name": "קורס שאיבת דם ורידי במבוגר",
                "description": "הקורס מתאים לאנשי מקצוע ולחסרי ניסיון רפואי, ללימוד שאיבת דם ורידי לבדיקות מעבדה. כולל הדרכה מעשית ותעודה.",
                "hours": 48,
                "img": "images/Course_5.png",
                "tag": "Emergency",
                "date": "28.04.2025",
                "address": "יצחק שדה 10, חיפה"
            },
            {
                "id": 6,
                "course_name": "קורס פראמדיקים",
                "description": 'הקורס הרפואי הבכיר ביותר במד"א, המכשיר פראמדיקים לזירות חירום מורכבות. כולל ידע מעמיק וניסיון מעשי בשטח.',
                "hours": 250,
                "img": "images/Course_6.png",
                "tag": "Emergency",
                "date": "30.05.2025",
                "address": "החרושת 14, כרמיאל"
            },
            {
                "id": 7,
                "course_name": 'קורס נאמני קורונה של מד"א',
                "description": "קורס אינטרנטי המספק כלים להתמודדות עם נגיף הקורונה וגדיעת שרשרת ההדבקה, כולל אסטרטגיות לניהול בטוח.",
                "hours": 3,
                "img": "images/Course_7.png",
                "tag": "Corona",
                "date": "01.06.2025",
                "address": "יגאל אלון 60, תל אביב -יפו"
            },
            {
                "id": 8,
                "course_name": "קורס חובשי רפואת חירום - נהגי אמבולנס",
                "description": "קורס מקיף לחובשי רפואת חירום ונהגי אמבולנס, כולל לימודים עיוניים, מעשיים והתנסות באמבולנסים.",
                "hours": 227,
                "img": "images/Course_8.png",
                "tag": "Emergency",
                "date": "14.06.2025",
                "address": "החרושת 14, כרמיאל"
            },
            {
                "id": 9,
                "course_name": 'קורס הסבת חובשים צבאיים לחובשי מד"א',
                "description": 'קורס ייחודי לבוגרי מסלול חובשים צבאי, הכולל הכשרה ברפואה דחופה בשדה הקליני של מד"א.',
                "hours": 100,
                "img": "images/Course_9.png",
                "tag": "Emergency",
                "date": "30.06.2025",
                "address": "הקישון 1, טבריה"
            },
            {
                "id": 10,
                "course_name": "קורס נאמני עזרה ראשונה לצוות חינוכי לגיל הרך",
                "description": "קורס חיוני לצוותי חינוך לגיל הרך, כולל נושאי החייאה, שימוש במכשירי החייאה, טיפול באלרגיה ועוד.",
                "hours": 22,
                "img": "images/Course_10.png",
                "tag": "FirstAid",
                "date": "02.07.2025",
                "address": "סוקולוב 76, הרצלייה"
            }
        ]
    }
    //שמירת אלמנט שאליו נרצה לשייך את הכרטיסיות
    const courseContainer = document.getElementById("Courses");
    
    // יצירת כרטיסי קורסים והוספתם לדף
    jsonData.courses.forEach((course) => {
        const HTML = `
    <div id="id_${course.id}" class="flip-card">
        <div id="AddBackCard_${course.id}" class="flip-card-inner card shadow-lg rounded border-0 ">
            <div id="course" class="flip-card-front">
            <div id="img_${course.id}" class="card-img-top img-fluid rounded-top topOfCard" >
                <img src="${course.img}" alt="Card image cap">
            </div>
                <div class="card-body text-center p-4">
                    <h4 class="card-title font-weight-bold text-uppercase">${course.course_name}</h4>                    
                    <button href="#" id="SignUp_${course.id}" class="btn btn-success btn-block text-white font-weight-bold shadow-sm">רישום לקורס</button>
                </div>
            </div>
            <div id="flipped_${course.id}" class="flip-card-back">
                <h2 id="CourseName_${course.id}">${course.course_name}</h2>
                <p>${course.description}</p> 
                <p class="card-text text-muted"><span>משך הקורס:</span> ${course.hours} שעות </p>
                <p class="card-text text-muted"><span>תאריר:</span> ${course.date} </p>
                <p class="card-text text-muted"><span>כתובת:</span> ${course.address} </p>
            </div>    
        </div>
    </div>
    `;
        courseContainer.innerHTML += HTML; // הוספת כרטיס HTML לתוך הקונטיינר
    });


// הוספת eventlistener לכפתורי רישום ואלמנטים הפוכים בכל כרטיס
    jsonData.courses.forEach((course) => {
        const SignBtn = document.getElementById("SignUp_" + course.id);
        SignBtn.addEventListener("click", function (event) {
            SignUp(event);  // Pass the event and course data
        });

        const chosenCourse = document.getElementById("img_" + course.id);
        const FlippedDiv = document.getElementById("flipped_" + course.id);

        chosenCourse.addEventListener("click", function (event) {
            toggleFlip(course.id);  // Pass the event and course data
        });

        FlippedDiv.addEventListener("click", function (event) {
            toggleFlip(course.id);  // Pass the event and course data
        })
    });

    // פונקציה להפיכת כרטיס
    function toggleFlip(idFromUser) {
        const DivToFlip = document.getElementById("id_" + idFromUser);
        DivToFlip.classList.toggle('flipped');
    }

    // פונקציה לניהול רישום לקורס (שינוי כפתור בין "רישום" ל"ביטול רישום")
    function SignUp(item) { 
        const signButtonClicked = item.target.id;  
        const clickedButton = document.getElementById(signButtonClicked);

        //שינוי צבע הכפתור בהתאם לרישום או ביטול
        clickedButton.classList.toggle("btn-danger");

        if (clickedButton.innerHTML == "רישום לקורס") {
            clickedButton.innerHTML = "ביטול רישום";
        } else {
            clickedButton.innerHTML = "רישום לקורס";
        }

    }

    //שמירת אלמנטים של הקטגוריות במשתנה
    const EmergencyTag = document.getElementById("btnEmergency");
    const FirstAidTag = document.getElementById("btnFirstAid");
    const CoronaTag = document.getElementById("btnCorona");

    //משתנה לשמירת הקטגוריה המוצגת כעט. במצב default יהיה מוגדר כ"All" מכיוון שהוא מציג בטעינת העמוד את כל הקטגוריות
    var CurrentTag = "All";

    // פונקציה להחלפת קטגוריה לפי תגית
    function ShowCategory(tagFromUser) {
        if (CurrentTag == tagFromUser || tagFromUser=="All") {
            console.log("here");
            //במידה והמשתמש בחר אותה קטגוריה פעם שניה, נציג את כל הקורסים
            jsonData.courses.forEach((course) => {
                const Card = document.getElementById("id_" + course.id);
                Card.style.display = "block";
            })
            //המשתנה יחזור להיות עם ערך "All", מכיוון שעכשיו מוצגים כל הקורסים על המסך
            CurrentTag = "All";
        } 
        else {
            CurrentTag = tagFromUser;
            //לולאה ל"כיבוי" ו"הצגת" קטגוריות רלוונטיות
            jsonData.courses.forEach((course) => {
                const Card = document.getElementById("id_" + course.id);

                if (course.tag != tagFromUser) {
                    Card.style.display = "none";
                } else {
                    Card.style.display = "block";
                }
            })
        }

        //תנאים לעיצוב הכפתור של קטגוריה. נוודא שהעיצוב של הקטגוריות הלא נבחרות יהיו "כבויים"
        if (tagFromUser === "FirstAid") {
            FirstAidTag.classList.toggle("filterByTagActive");
            EmergencyTag.classList.remove("filterByTagActive");
            CoronaTag.classList.remove("filterByTagActive");
        } else if (tagFromUser === "Corona") {
            CoronaTag.classList.toggle("filterByTagActive");
            EmergencyTag.classList.remove("filterByTagActive");
            FirstAidTag.classList.remove("filterByTagActive");
        } else if (tagFromUser === "Emergency") {
            EmergencyTag.classList.toggle("filterByTagActive");
            FirstAidTag.classList.remove("filterByTagActive");
            CoronaTag.classList.remove("filterByTagActive");
        }
        else{
            EmergencyTag.classList.remove("filterByTagActive");
            FirstAidTag.classList.remove("filterByTagActive");
            CoronaTag.classList.remove("filterByTagActive");
        }
    }

    //לכל משתנה (אלמנט) הוספנו EventListener כדי לקרוא לפוקנציה של הצגת קטגורויות
    FirstAidTag.addEventListener("click", () => ShowCategory("FirstAid"));
    CoronaTag.addEventListener("click", () => ShowCategory("Corona"));
    EmergencyTag.addEventListener("click", () => ShowCategory("Emergency"));

    //שמירת אלמנט של כפתור חיפוש במשתנה
    const SearchBtn = document.getElementById("searchButton");

    //פונקציה לחיפוש שם קורס לפי מילת מפתח שהמשתמש הזין
    function SearchCourse(CourseToSearch) {
        //במידה והייתה קטגורייה מסומנת והמשתמש עושה חיפוש, נוריד את הקטגורייה
        ShowCategory("All");
        jsonData.courses.forEach((course) => {
            const Card = document.getElementById("id_" + course.id);
            const CourseToSearch = document.getElementById("searchBar").value;

            //במידה והמילה של המתשמש מופיעה בשם של הקורס, הוא יהיה מוצג, אחרת נסתיר אותו
            if (course.course_name.includes(CourseToSearch)) {
                Card.style.display = "block";
            } else {
                Card.style.display = "none";
            }
        })
    }

    //נוסיף לכפתוש חיפוש eventListener לקריאת הפונקציה של חיפוש
    SearchBtn.addEventListener("click", SearchCourse);
    
    var userInput="";
    //משתנה השומר את האלמנט של אינפוט
    const InputFromUser = document.getElementById("searchBar");
    
    //נוסיף לאלמנט זה eventListener מסוג input, כך שכל פעם השתמש עושה שינוי בתוך התיבת טקסט האינפוט יפעיל פונקציה
    InputFromUser.addEventListener("input", function (event) {
        //הפונקציה מיועדת להצגת כל הקורסים במידה והמשתמש מחק את הטקסט בתיבת החיפוש
        
        //נשמור את הטקסט שהמשתמש הזין
        userInput = event.target.value;
        //נשווה את הטקסט, במידה ולא קיים טקסט בתיבה, נרצה לקרוא לפונקציה של SearchCourse. נשלח עליה טקסט ריק, כך שהיא תמיג את כל הקורסים על המסך
        if(userInput=="")
        {
            SearchCourse("");   
        }
    });
})



//טוגל לתפריט ניוות במובייל
function toggleNav() {
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

//הוספנו eventListener לחלון, כדי לזהות שינוי גודל של מסך
window.addEventListener('load', checkResolutionAndRemoveClass);
window.addEventListener('resize', checkResolutionAndRemoveClass);

//במידה ומהתמש פתח תפריט ניווט במובייל ואז עבר למסך גדול, נרצה לוודא שהמחלקה של תפריט ניווט במובייל מסתירה אותו
function checkResolutionAndRemoveClass() {
    const element = document.getElementById('main-nav');
    if (window.innerWidth >= 920) {
        element.classList.add('hide-mobile');
    }
}
    
