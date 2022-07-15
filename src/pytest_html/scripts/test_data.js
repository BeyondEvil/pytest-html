const testData = {"title": "BARA FEJK", "collectedItems": 2, "environment": {"Python": "3.9.10", "Platform": "macOS-11.6-x86_64-i386-64bit", "Packages": {"pytest": "6.2.5", "py": "1.11.0", "pluggy": "1.0.0"}, "Plugins": {"metadata": "1.11.0", "html": "3.1.2.dev69"}}, "tests": [{"nodeid": "test_html.py::test_url", "location": ["test_html.py", 4, "test_url"], "keywords": {"test_url": 1, "test_html.py": 1, "testing-html": 1}, "outcome": "passed", "longrepr": null, "when": "setup", "user_properties": [], "sections": [], "duration": 0.0003443180000000101, "$report_type": "TestReport"}, {"nodeid": "test_html.py::test_url", "location": ["test_html.py", 4, "test_url"], "keywords": {"test_url": 1, "test_html.py": 1, "testing-html": 1}, "outcome": "failed", "longrepr": {"reprcrash": {"path": "/Volumes/code/testing-html/test_html.py", "lineno": 16, "message": "assert False"}, "reprtraceback": {"reprentries": [{"type": "ReprEntry", "data": {"lines": ["    def test_url(extra):", "        \"\"\"", "            meh", "            alb alb alb", "            @param: hello", "            :param just", "        \"\"\"", "        # driver.get(\"https://www.google.com\")", "        extra.append(extras.text(\"some string\"))", "        extra.append(extras.image(\"file:///Users/jimbrannlund/dev/pytest-dev/testing-html/screenshot.png\"))", "        extra.append(extras.image(\"file:///Users/jimbrannlund/dev/pytest-dev/testing-html/screenshot.png\"))", ">       assert False", "E       assert False"], "reprfuncargs": {"args": [["extra", "[{'content': 'some string', 'extension': 'txt', 'format_type': 'text', 'mime_type': 'text/plain', ...}, {'content': 'f...ev/pytest-dev/testing-html/screenshot.png', 'extension': 'png', 'format_type': 'image', 'mime_type': 'image/png', ...}]"]]}, "reprlocals": null, "reprfileloc": {"path": "test_html.py", "lineno": 16, "message": "AssertionError"}, "style": "long"}}], "extraline": null, "style": "long"}, "sections": [], "chain": [[{"reprentries": [{"type": "ReprEntry", "data": {"lines": ["    def test_url(extra):", "        \"\"\"", "            bla bla bla bla", "            alb alb alb", "            @param: hello", "            :param just", "        \"\"\"", "        # driver.get(\"https://www.google.com\")", "        extra.append(extras.text(\"some string\"))", "        extra.append(extras.image(\"file:///Users/jimbrannlund/dev/pytest-dev/testing-html/screenshot.png\"))", "        extra.append(extras.image(\"file:///Users/jimbrannlund/dev/pytest-dev/testing-html/screenshot.png\"))", ">       assert False", "E       assert False"], "reprfuncargs": {"args": [["extra", "[{'content': 'some string', 'extension': 'txt', 'format_type': 'text', 'mime_type': 'text/plain', ...}, {'content': 'f...ev/pytest-dev/testing-html/screenshot.png', 'extension': 'png', 'format_type': 'image', 'mime_type': 'image/png', ...}]"]]}, "reprlocals": null, "reprfileloc": {"path": "test_html.py", "lineno": 16, "message": "AssertionError"}, "style": "long"}}], "extraline": null, "style": "long"}, {"path": "/Volumes/code/testing-html/test_html.py", "lineno": 16, "message": "assert False"}, null]]}, "when": "call", "user_properties": [], "sections": [], "duration": 0.00022838299999999867, "extra": [{"name": "Text", "format_type": "text", "content": "some string", "mime_type": "text/plain", "extension": "txt"}, {"name": "Image", "format_type": "image", "content": "file:///Users/jimbrannlund/dev/pytest-dev/testing-html/screenshot.png", "mime_type": "image/png", "extension": "png"}, {"name": "Image", "format_type": "image", "content": "file:///Users/jimbrannlund/dev/pytest-dev/testing-html/screenshot.png", "mime_type": "image/png", "extension": "png"}], "$report_type": "TestReport"}, {"nodeid": "test_html.py::test_url", "location": ["test_html.py", 4, "test_url"], "keywords": {"test_url": 1, "test_html.py": 1, "testing-html": 1}, "outcome": "passed", "longrepr": null, "when": "teardown", "user_properties": [], "sections": [], "duration": 0.00014628500000002376, "$report_type": "TestReport"}, {"nodeid": "test_html.py::test_url2", "location": ["test_html.py", 18, "test_url2"], "keywords": {"test_html.py": 1, "test_url2": 1, "testing-html": 1}, "outcome": "passed", "longrepr": null, "when": "setup", "user_properties": [], "sections": [], "duration": 0.00011052099999997456, "$report_type": "TestReport"}, {"nodeid": "test_html.py::test_url2", "location": ["test_html.py", 18, "test_url2"], "keywords": {"test_html.py": 1, "test_url2": 1, "testing-html": 1}, "outcome": "passed", "longrepr": null, "when": "call", "user_properties": [], "sections": [], "duration": 0.0001266319999999599, "extra": [], "$report_type": "TestReport"}, {"nodeid": "test_html.py::test_url2", "location": ["test_html.py", 18, "test_url2"], "keywords": {"test_html.py": 1, "test_url2": 1, "testing-html": 1}, "outcome": "passed", "longrepr": null, "when": "teardown", "user_properties": [], "sections": [], "duration": 0.0002340050000000371, "$report_type": "TestReport"}]}
const jsonData = {"title": "REAL REPORT", "collectedItems": 2, "environment": {"Python": "3.9.10", "Platform": "macOS-11.6-x86_64-i386-64bit", "Packages": {"pytest": "6.2.5", "py": "1.11.0", "pluggy": "1.0.0"}, "Plugins": {"metadata": "1.11.0", "html": "3.1.2.dev69"}}, "tests": [{"nodeid": "test_html.py::test_url", "location": ["test_html.py", 4, "test_url"], "keywords": {"test_url": 1, "test_html.py": 1, "testing-html": 1}, "outcome": "passed", "longrepr": null, "when": "setup", "user_properties": [], "sections": [], "duration": 0.0003443180000000101, "$report_type": "TestReport"}, {"nodeid": "test_html.py::test_url", "location": ["test_html.py", 4, "test_url"], "keywords": {"test_url": 1, "test_html.py": 1, "testing-html": 1}, "outcome": "failed", "longrepr": {"reprcrash": {"path": "/Volumes/code/testing-html/test_html.py", "lineno": 16, "message": "assert False"}, "reprtraceback": {"reprentries": [{"type": "ReprEntry", "data": {"lines": ["    def test_url(extra):", "        \"\"\"", "            meh", "            alb alb alb", "            @param: hello", "            :param just", "        \"\"\"", "        # driver.get(\"https://www.google.com\")", "        extra.append(extras.text(\"some string\"))", "        extra.append(extras.image(\"file:///Users/jimbrannlund/dev/pytest-dev/testing-html/screenshot.png\"))", "        extra.append(extras.image(\"file:///Users/jimbrannlund/dev/pytest-dev/testing-html/screenshot.png\"))", ">       assert False", "E       assert False"], "reprfuncargs": {"args": [["extra", "[{'content': 'some string', 'extension': 'txt', 'format_type': 'text', 'mime_type': 'text/plain', ...}, {'content': 'f...ev/pytest-dev/testing-html/screenshot.png', 'extension': 'png', 'format_type': 'image', 'mime_type': 'image/png', ...}]"]]}, "reprlocals": null, "reprfileloc": {"path": "test_html.py", "lineno": 16, "message": "AssertionError"}, "style": "long"}}], "extraline": null, "style": "long"}, "sections": [], "chain": [[{"reprentries": [{"type": "ReprEntry", "data": {"lines": ["    def test_url(extra):", "        \"\"\"", "            bla bla bla bla", "            alb alb alb", "            @param: hello", "            :param just", "        \"\"\"", "        # driver.get(\"https://www.google.com\")", "        extra.append(extras.text(\"some string\"))", "        extra.append(extras.image(\"file:///Users/jimbrannlund/dev/pytest-dev/testing-html/screenshot.png\"))", "        extra.append(extras.image(\"file:///Users/jimbrannlund/dev/pytest-dev/testing-html/screenshot.png\"))", ">       assert False", "E       assert False"], "reprfuncargs": {"args": [["extra", "[{'content': 'some string', 'extension': 'txt', 'format_type': 'text', 'mime_type': 'text/plain', ...}, {'content': 'f...ev/pytest-dev/testing-html/screenshot.png', 'extension': 'png', 'format_type': 'image', 'mime_type': 'image/png', ...}]"]]}, "reprlocals": null, "reprfileloc": {"path": "test_html.py", "lineno": 16, "message": "AssertionError"}, "style": "long"}}], "extraline": null, "style": "long"}, {"path": "/Volumes/code/testing-html/test_html.py", "lineno": 16, "message": "assert False"}, null]]}, "when": "call", "user_properties": [], "sections": [], "duration": 0.00022838299999999867, "extra": [{"name": "Text", "format_type": "text", "content": "some string", "mime_type": "text/plain", "extension": "txt"}, {"name": "Image", "format_type": "image", "content": "file:///Users/jimbrannlund/dev/pytest-dev/testing-html/screenshot.png", "mime_type": "image/png", "extension": "png"}, {"name": "Image", "format_type": "image", "content": "file:///Users/jimbrannlund/dev/pytest-dev/testing-html/screenshot.png", "mime_type": "image/png", "extension": "png"}], "$report_type": "TestReport"}, {"nodeid": "test_html.py::test_url", "location": ["test_html.py", 4, "test_url"], "keywords": {"test_url": 1, "test_html.py": 1, "testing-html": 1}, "outcome": "passed", "longrepr": null, "when": "teardown", "user_properties": [], "sections": [], "duration": 0.00014628500000002376, "$report_type": "TestReport"}, {"nodeid": "test_html.py::test_url2", "location": ["test_html.py", 18, "test_url2"], "keywords": {"test_html.py": 1, "test_url2": 1, "testing-html": 1}, "outcome": "passed", "longrepr": null, "when": "setup", "user_properties": [], "sections": [], "duration": 0.00011052099999997456, "$report_type": "TestReport"}, {"nodeid": "test_html.py::test_url2", "location": ["test_html.py", 18, "test_url2"], "keywords": {"test_html.py": 1, "test_url2": 1, "testing-html": 1}, "outcome": "passed", "longrepr": null, "when": "call", "user_properties": [], "sections": [], "duration": 0.0001266319999999599, "extra": [], "$report_type": "TestReport"}, {"nodeid": "test_html.py::test_url2", "location": ["test_html.py", 18, "test_url2"], "keywords": {"test_html.py": 1, "test_url2": 1, "testing-html": 1}, "outcome": "passed", "longrepr": null, "when": "teardown", "user_properties": [], "sections": [], "duration": 0.0002340050000000371, "$report_type": "TestReport"}]}

exports.jsonData = jsonData
exports.testData = testData