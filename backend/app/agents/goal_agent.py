from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field
from typing import List

llm = ChatGroq(model="llama-3.1-70b-versatile", temperature=0.7)

class SuggestedGoal(BaseModel):
    title: str
    description: str
    thrust_area: str
    uom: str
    target: float
    weightage: int = Field(..., ge=10, le=100)

async def generate_smart_goals(role: str, department: str, strengths: str = "") -> List[SuggestedGoal]:
    parser = PydanticOutputParser(pydantic_object=List[SuggestedGoal])
    
    prompt = ChatPromptTemplate.from_template("""
    Generate 4-6 SMART professional goals for:
    Role: {role}
    Department: {department}
    Strengths: {strengths or 'None provided'}
    
    Return as JSON array only.
    {format_instructions}
    """)
    
    chain = prompt | llm | parser
    return await chain.ainvoke({
        "role": role,
        "department": department,
        "strengths": strengths,
        "format_instructions": parser.get_format_instructions()
    })