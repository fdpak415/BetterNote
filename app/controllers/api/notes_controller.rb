class Api::NotesController < ApplicationController

  def index
    @notes = Note.all
    render :index
  end

  def show
    @note = note.find(note_params[:id])
  end

  def create
    new_params = note_params.reject {|h| h["tags"]}
    @note = Note.new(new_params)

    if note_params[:tags] != []
      @tags = []
      note_params[:tags].each do |tag|
        @tags << Tag.create({"name" => tag})
        @note.tags << @tags
      end
    end
      if @note.save
        render :show
      else
        render @note.errors.full_messages, status: 422
      end
  end

  def update

    @note = Note.find(note_params[:id])
      if @note.update!(note_params)
        render :show
      else
        render @note.errors.full_messages, status: 422
      end
  end

  def destroy
    @note = Note.find(note_params[:id])
    @note.destroy!
      render :show
  end

  private
    def note_params
      params.require(:note).permit(:id, :title, :body, :notebook_id, :author_id, :tags => [])
    end

end
