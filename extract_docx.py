import docx

doc = docx.Document('/Users/ameno/Projects/WebProjects/spark/Spark 官网.docx')
content = [para.text for para in doc.paragraphs if para.text]

# 将内容保存到文件
with open('/Users/ameno/Projects/WebProjects/spark/docx_content.txt', 'w') as f:
    f.write('\n'.join(content))

print(f'文档内容已保存到 /Users/ameno/Projects/WebProjects/spark/docx_content.txt')