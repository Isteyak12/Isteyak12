from pathlib import Path
from PIL import Image
import streamlit as st

# --- PATH SETTINGS ---
current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
css_file = current_dir / "styles" / "main.css"
resume_file = current_dir / "assets" / "my_resume.pdf"
profile_pic = current_dir / "assets" / "profile-pic.jpg"


# --- GENERAL SETTINGS ---
PAGE_TITLE = "Digital CV | Isteyak"
PAGE_ICON = ":wave:"
NAME = "Isteyak "
DESCRIPTION = """
Currently pursuing undergrad computer science degree at the University of Windsor  
"""
EMAIL = "2120024@iub.edu.bd"
SOCIAL_MEDIA = {
    "YouTube": "https://youtube.com/c/codingisfun",
    "LinkedIn": "https://linkedin.com",
    "GitHub": "https://github.com",
    "Twitter": "https://twitter.com",
}

PROJECTS = {
    "🏆Checking int data type ": "https://www.youtube.com/watch?v=ITtic6gf7_s&t=158s",
}

st.set_page_config(page_title=PAGE_TITLE, page_icon=PAGE_ICON)
st.title("Hello Friends!")


# --- LOAD CSS, PDF & PROFIL PIC ---
with open(css_file) as f:
    st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)
with open(resume_file, "rb") as pdf_file:
    PDFbyte = pdf_file.read()
profile_pic = Image.open(profile_pic)

# --HERO SECTION---
col1, col2= st.columns(2, gap="small")
with col2:
        st.image(profile_pic, width=230)
with col1:
        st.title(NAME)
        st.write(DESCRIPTION)
        st.download_button(
            label= "📄 Download Resume",
            data=PDFbyte,
            file_name=resume_file.name,
            mime="application/octet-stream",)
        st.write("📫", EMAIL)

# --- SOCIAL LINKS ---
st.write("#")
cols=st.columns(len(SOCIAL_MEDIA))
for index, (platform, link) in enumerate(SOCIAL_MEDIA.items()):
      cols[index].write(f"[{platform}]({link})")
        
        
# ---EXPERIENCE & QUALIFICATIONS ---
st.write("#")
st.subheader("Experience & Qualifications")
st.write("""
- ✔️ Strong hands-on experience and knowledge in Python and Java
- ✅ Good understanding of statistical principles and their respective applications
- ✔️ Excellent team player and displaying a strong sense of initiative on tasks
- ✅ Intuitive understanding of linear algebra-based applications
"""
)

#---SKILLS--
st.write('\n')
st.subheader("Hard Skills")
st.write("""
- 👩‍💻 Programming: Python, Java, C++, C
         """)

# --- WORK HISTORY ---
st.write('\n')
st.subheader("Work History")
st.write("---")

# --- JOB 1
st.write("🚧", "**Teacher's Assistant | University of Windsor**")
st.write("09/2023 - Present")
st.write(
    """
- ► Mentored more than 100+ students single-handedly in the absence of TAs during labs 

"""
)

st.write('\n')
st.subheader("Projects & Accomplishments")
st.write("---")
for project, link in PROJECTS.items():
    st.write(f"[{project}]({link})")
    
