import re

urls = [
    "https://www.youtube.com/watch?v=JhHMJCUmq28",
    "https://www.youtube.com/watch?v=WIyTZDHuarQ",
    "https://www.youtube.com/watch?v=gAFAj3pzvAA",
    "https://www.youtube.com/watch?v=p7XIdFbCQyY",
    "https://www.youtube.com/watch?v=Q8bn-NXgOOk",
    "https://www.youtube.com/watch?v=yb38jozeDOs",
    "https://www.youtube.com/watch?v=k6TWO-ESC6A",
    "https://www.youtube.com/watch?v=0CwPa0tScf8",
    "https://www.youtube.com/watch?v=NqHKr9CGWJ0",
    "https://www.youtube.com/watch?v=SxaoWJ2gkzc",
    "https://www.youtube.com/watch?v=H-_CGnTkuL0",
    "https://www.youtube.com/watch?v=rohgVwQ57uM"
]

with open('src/data/mockVideos.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# We want to replace each occurrence of "category: '[Something]'," 
# with "category: '[Something]',\n    youtubeUrl: '[url]',"

parts = re.split(r"(category: '[^']+',\n)", content)
# parts will have the text before, then the category line, then the text after, etc.
# parts length should be 1 (start) + 12 * 2 = 25 parts.

if len(parts) == 25:
    new_content = parts[0]
    for i in range(12):
        new_content += parts[i*2 + 1]
        new_content += f"    youtubeUrl: '{urls[i]}',\n"
        new_content += parts[i*2 + 2]
    
    with open('src/data/mockVideos.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Success")
else:
    print(f"Failed. Found {len(parts)} parts.")
