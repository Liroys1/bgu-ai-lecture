import { act } from '../slides-v2/helpers';

export const v6s03 = () => act(3, 'I', 'הסיפור שלי', '14 שנה. שש תחנות. שיעור אחד.');

export function v6s04() {
  return `
    <div class="v2-topbar"><span class="v2-tb-num">04</span><span class="v2-tb-title">MY STORY</span></div>
    <div class="v2-frame v6-story-frame">
      <div class="v6-story-header">
        <div class="v2-eyebrow">MY STORY · הסיפור שלי</div>
        <h2 class="v6-story-title">14 שנה · 6 תחנות · קו אחד</h2>
        <p class="v6-story-tagline">לא כל הלמידה קרתה בכיתה.</p>
      </div>
      <div class="v6-story-tracks">
        <div class="v6-track">
          <div class="v6-track-label">מסלול הקריירה</div>
          <div class="v6-stop">
            <span class="v6-stop-name">BGU — תעשייה וניהול</span>
            <span class="v6-stop-lesson">חשיבה מערכתית · שפה משותפת עם כולם</span>
          </div>
          <div class="v6-stop">
            <span class="v6-stop-name">צבא</span>
            <span class="v6-stop-lesson">מנהיגות תחת לחץ · קבלת החלטות</span>
          </div>
          <div class="v6-stop">
            <span class="v6-stop-name">ייעוץ</span>
            <span class="v6-stop-lesson">ניתוח בעיות · שינוי ארגוני</span>
          </div>
          <div class="v6-stop">
            <span class="v6-stop-name">סטארטאפ</span>
            <span class="v6-stop-lesson">בניה מאפס · פיבוט וחוסן</span>
          </div>
          <div class="v6-stop">
            <span class="v6-stop-name">היי-טק</span>
            <span class="v6-stop-lesson">קנה מידה · מערכות אנושיות</span>
          </div>
          <div class="v6-stop v6-stop-now">
            <span class="v6-stop-name">Lemonade</span>
            <span class="v6-stop-lesson">AI כשותף · למידה כמקצוע</span>
          </div>
        </div>
        <div class="v6-track">
          <div class="v6-track-label">מחוץ לקריירה</div>
          <div class="v6-life-item">
            <div class="v6-life-dot"></div>
            <div>
              <div class="v6-life-name">נבחרת כדוריד — אסא בן גוריון</div>
              <div class="v6-life-lesson">עבודת צוות · ביצועים תחת לחץ</div>
            </div>
          </div>
          <div class="v6-life-item">
            <div class="v6-life-dot"></div>
            <div>
              <div class="v6-life-name">אימפרוביזציה ומשחק</div>
              <div class="v6-life-lesson">נוכחות · הקשבה · תקשורת</div>
            </div>
          </div>
          <div class="v6-life-item">
            <div class="v6-life-dot"></div>
            <div>
              <div class="v6-life-name">כתיבת שירים וקטעים</div>
              <div class="v6-life-lesson">קריאייטיביות · ביטוי · נרטיב</div>
            </div>
          </div>
          <div class="v6-life-item">
            <div class="v6-life-dot"></div>
            <div>
              <div class="v6-life-name">התנדבות — פורום 20/80</div>
              <div class="v6-life-lesson">נתינה · קהילה · מחויבות</div>
            </div>
          </div>
          <div class="v6-life-item">
            <div class="v6-life-dot"></div>
            <div>
              <div class="v6-life-name">בניית אתרים ואפליקציות</div>
              <div class="v6-life-lesson">ידיים · מעשה · לפני ה-AI</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}
