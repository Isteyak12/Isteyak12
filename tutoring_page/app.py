from pathlib import Path
from PIL import Image
import streamlit as st

# --- PATH SETTINGS ---
current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
css_file = current_dir / "styles" / "main.css"
resume_file = current_dir / "assets" / "poster.pdf"
profile_pic = Image.open(current_dir / "assets" / "emma_coding.jpg")
profile_pic2 = Image.open(current_dir / "assets" / "batman_coding.jpg")
profile_pic3 = Image.open(current_dir / "assets" / "batman_coding2.jpg")
profile_pic4 = Image.open(current_dir / "assets" / "cat_coding.jpg")
profile_pic5 = Image.open(current_dir / "assets" / "qr.jpg")
# --- GENERAL SETTINGS ---
PAGE_TITLE = "Windsor's CS"
PAGE_ICON = ":computer:"
NAME = "COMP SCI TUTORING"
DESCRIPTION = """
Offering the best computer science tutoring service tailored to your courses
"""
PHONE1 = "(437) 849-5115"
PHONE2 = "(226) 975-4203"
EMAIL1 = "isteyak@uwindsor.com"
EMAIL2 = "yousse81@uwindsor.ca"

SOCIAL_MEDIA = {
    "YouTube": "https://www.youtube.com/watch?v=ITtic6gf7_s&t=158s",
    "LinkedIn": "https://linkedin.com",
    "GitHub": "https://github.com",
    "Twitter": "https://twitter.com",
}

PROJECTS = {
    "🏆 Checking int data type": "https://www.youtube.com/watch?v=ITtic6gf7_s&t=158s",
}

st.set_page_config(page_title=PAGE_TITLE, page_icon=PAGE_ICON)
st.title("Hello Friends!")

# --- LOAD CSS, PDF & PROFILE PIC ---
with open(css_file) as f:
    st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)
with open(resume_file, "rb") as pdf_file:
    PDFbyte = pdf_file.read()

# --HERO SECTION---
col1, col2 = st.columns(2, gap="small")
with col2:
    st.image(profile_pic, width=230)
with col1:
    st.title(NAME)
    st.write(DESCRIPTION)
    st.download_button(
        label="📄 Download Poster",
        data=PDFbyte,
        file_name=resume_file.name,
        mime="application/octet-stream",
    )

# Contact Information
st.write("#")
col3, col4 = st.columns(2, gap="small")
with col3:
    st.image(profile_pic4, width=230)
with col4:    
    st.title("FEEL FREE TO CONTACT US @")
    st.write("📞", PHONE1)
    st.write("📫", EMAIL1)
    st.write("📞", PHONE2)
    st.write("📫", EMAIL2)

# # --- SOCIAL LINKS ---
# st.write("#")
# cols=st.columns(len(SOCIAL_MEDIA))
# for index, (platform, link) in enumerate(SOCIAL_MEDIA.items()):
#       cols[index].write(f"[{platform}]({link})")
   
# --- Courses Available ---
st.write("#")
st.subheader("Do you need help with...")
col5, col6 = st.columns(2, gap="small")
with col5:
    st.write("✅ COMP 1000")
    st.write("✔️ COMP 1047")
    st.write("✅ COMP 1400")
    st.write("✔️ COMP 1410")

with col6:
    st.write("✅ COMP 2120")
    st.write("✔️ COMP 2540")
    st.write("✅ COMP 2560")
    st.write("✔️ COMP 2067")

# --- Don't miss out --
st.write('\n')
st.subheader("Don't miss out")
st.write("""
- 👩‍💻 Programming languages taught in Python, Java, C++, C     
- Sessions are $30 per hour
- Get your first tutoring session 50% OFF
- Previously tutored 16+ students in COMP courses
- Available for in-person or online sessions""")

# --- WORK HISTORY ---
st.write("---")
st.subheader(" Increased students' grades by up to 20%")

# Images
st.write("#")
col5, col6 = st.columns(2, gap="small")
with col5:
    st.image(profile_pic5, width=240)
with col6:
    st.image(profile_pic3, width=240)
