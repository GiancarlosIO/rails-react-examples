# enconding: utf-8
# API
# NotesController
class Api::V1::NotesController < Api::V1::ApiController
  def index
    @notes = Note.all
  end
end
