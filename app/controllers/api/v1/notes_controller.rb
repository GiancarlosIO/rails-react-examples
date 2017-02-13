# enconding: utf-8
# API
# NotesController
class Api::V1::NotesController < Api::V1::ApiController
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    @notes = Note.all.order(created_at: :desc)
  end

  def show
  end

  def create
    @note = Note.new(params_note)
    if @note.save
      render template: 'api/v1/notes/show'
    else
      render json: {error: @note.errors}, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(params_note)
      render template: 'api/v1/notes/show'
    else
      render json: { error: @note.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    if @note.destroy
      render json: { message: 'Deleted successfully' }, status: 200
    end
  end

  private

  def set_note
    if Note.where(id: params[:id]).first.nil?
      render json: { error: 'Note not found' }, status: :unprocessable_entity
    else
      @note = Note.find(params[:id])
    end
  end

  def params_note
    params.require(:note).permit(:text)
  end
end
