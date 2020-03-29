from pydantic import BaseModel


class SkillBase(BaseModel):
    skill_name: str = None
    category: str = None


class SkillCreate(SkillBase):
    skill_name: str


class SkillUpdate(SkillBase):
    pass


class SkillInDBBase(SkillBase):
    skill_id: int
    skill_name: str
    category: str

    class Config:
        orm_mode = True


class Skill(SkillInDBBase):
    pass


class SkillInDB(SkillInDBBase):
    pass
