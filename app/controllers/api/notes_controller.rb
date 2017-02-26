class Api::NotesController < ApplicationController

  def index
    @notes = Note.all
    render :index
  end

  def show
    @note = note.find(note_params[:id])
  end

  def create
    @note = Note.new(note_params)
      if @note.save
        render :show
      else
        render @note.errors.full_messages, status: 422
      end
  end

  def update

    @Note = Note.find(note_params[:id])
      if @note.update!(note_params)
        render :show
      else
        render @note.errors.full_messages, status: 422
      end
  end

  def destroy
    @Note = Note.find(note_params[:id])
    @Note.destroy!
      render :show
  end

  private
    def note_params
      params.require(:note).permit(:id, :title, :body, :notebook_id, :author_id)
    end

end
