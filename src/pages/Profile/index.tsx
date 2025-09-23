import "./style.css";

export function Profile() {
   function UmaIcon() {
      return <div class="uma-icon" />;
   }

   return (
      <div class="profile-page">
         <div class="profile-card">
            <section>
               <div class="profile-image"></div>
            </section>

            <section>
               <div class="section-title">
                  <UmaIcon />
                  Trainer ID
               </div>
               <div class="section-value">625 910 832 434</div>
            </section>

            <section>
               <div class="section-title">
                  <UmaIcon />
                  Comment
               </div>
               <div class="section-value">hello :3</div>
            </section>

            <div class="profile-cards">
               <section>
                  <span class="section-title">
                     <UmaIcon />
                     Star Umamusume
                  </span>
               </section>
               <section>
                  <div class="section-title">
                     <UmaIcon />
                     Career Support
                  </div>
               </section>
            </div>
         </div>
      </div>
   );
}
