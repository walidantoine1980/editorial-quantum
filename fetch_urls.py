import urllib.request
import urllib.parse
import re

queries = [
    "Quantum Computers Explained Kurzgesagt",
    "Is Quantum Biology Real? Veritasium",
    "Quantum Mechanics for Beginners Domain of Science",
    "The Many Worlds Interpretation of Quantum Mechanics Sean Carroll",
    "Quantum Entanglement Physics Girl",
    "How Quantum Teleportation Works Science Insider",
    "String Theory PBS Space Time",
    "What is Consciousness in a Quantum World? Closer To Truth",
    "Quantum Machine Learning Algorithms Lex Fridman",
    "Photosynthesis and Quantum Coherence MIT OpenCourseWare",
    "Dark Matter & Quantum Gravity Quanta Magazine",
    "Free Will in a Deterministic Universe Big Think"
]

results = []
for q in queries:
    try:
        url = "https://www.youtube.com/results?search_query=" + urllib.parse.quote(q)
        html = urllib.request.urlopen(url).read().decode()
        video_ids = re.findall(r"watch\?v=([a-zA-Z0-9_-]{11})", html)
        if video_ids:
            results.append(f"https://www.youtube.com/watch?v={video_ids[0]}")
        else:
            results.append("NOT FOUND")
    except Exception as e:
        results.append(str(e))

for i, url in enumerate(results):
    print(f"Video {i+1}: {url}")
