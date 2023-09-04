import { Allow, Entity, Fields, Validators } from 'remult'

@Entity('tasks', {
  allowApiCrud: Allow.authenticated,
  allowApiInsert: 'admin',
})
export class Task {
  @Fields.cuid()
  id = ''
  @Fields.string({
    validate: (task) => {
      if (task.title.length < 3) throw Error('Too short')
    },
  })
  title = ''
  @Fields.boolean()
  completed = false
  @Fields.createdAt()
  createdAt?: Date
}
